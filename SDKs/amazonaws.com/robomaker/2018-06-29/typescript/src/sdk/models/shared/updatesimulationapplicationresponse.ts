import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Environment } from "./environment";
import { RenderingEngine } from "./renderingengine";
import { RobotSoftwareSuite } from "./robotsoftwaresuite";
import { SimulationSoftwareSuite } from "./simulationsoftwaresuite";
import { Source } from "./source";


export class UpdateSimulationApplicationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=environment" })
  environment?: Environment;

  @Metadata({ data: "json, name=lastUpdatedAt" })
  lastUpdatedAt?: Date;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=renderingEngine" })
  renderingEngine?: RenderingEngine;

  @Metadata({ data: "json, name=revisionId" })
  revisionId?: string;

  @Metadata({ data: "json, name=robotSoftwareSuite" })
  robotSoftwareSuite?: RobotSoftwareSuite;

  @Metadata({ data: "json, name=simulationSoftwareSuite" })
  simulationSoftwareSuite?: SimulationSoftwareSuite;

  @Metadata({ data: "json, name=sources", elemType: shared.Source })
  sources?: Source[];

  @Metadata({ data: "json, name=version" })
  version?: string;
}
