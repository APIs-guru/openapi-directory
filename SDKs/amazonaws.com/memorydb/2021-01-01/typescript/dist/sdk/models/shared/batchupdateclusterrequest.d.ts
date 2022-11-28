import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceUpdateRequest } from "./serviceupdaterequest";
export declare class BatchUpdateClusterRequest extends SpeakeasyBase {
    clusterNames: string[];
    serviceUpdate?: ServiceUpdateRequest;
}
