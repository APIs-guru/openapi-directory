import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Environment } from "./environment";
import { RobotSoftwareSuite } from "./robotsoftwaresuite";
import { Source } from "./source";



export class UpdateRobotApplicationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=environment" })
  environment?: Environment;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedAt" })
  lastUpdatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=revisionId" })
  revisionId?: string;

  @SpeakeasyMetadata({ data: "json, name=robotSoftwareSuite" })
  robotSoftwareSuite?: RobotSoftwareSuite;

  @SpeakeasyMetadata({ data: "json, name=sources", elemType: Source })
  sources?: Source[];

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
