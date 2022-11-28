import { SpeakeasyBase } from "../../../internal/utils";
import { BaselineOverride } from "./baselineoverride";
export declare class GetDeployablePatchSnapshotForInstanceRequest extends SpeakeasyBase {
    baselineOverride?: BaselineOverride;
    instanceId: string;
    snapshotId: string;
}
