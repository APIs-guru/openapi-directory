import { SpeakeasyBase } from "../../../internal/utils";
import { Environment } from "./environment";
import { RenderingEngine } from "./renderingengine";
import { RobotSoftwareSuite } from "./robotsoftwaresuite";
import { SimulationSoftwareSuite } from "./simulationsoftwaresuite";
import { Source } from "./source";
export declare class DescribeSimulationApplicationResponse extends SpeakeasyBase {
    arn?: string;
    environment?: Environment;
    imageDigest?: string;
    lastUpdatedAt?: Date;
    name?: string;
    renderingEngine?: RenderingEngine;
    revisionId?: string;
    robotSoftwareSuite?: RobotSoftwareSuite;
    simulationSoftwareSuite?: SimulationSoftwareSuite;
    sources?: Source[];
    tags?: Map<string, string>;
    version?: string;
}
