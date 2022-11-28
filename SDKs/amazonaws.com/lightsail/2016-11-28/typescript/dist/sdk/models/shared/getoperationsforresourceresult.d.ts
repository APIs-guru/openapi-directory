import { SpeakeasyBase } from "../../../internal/utils";
import { Operation } from "./operation";
export declare class GetOperationsForResourceResult extends SpeakeasyBase {
    nextPageCount?: string;
    nextPageToken?: string;
    operations?: Operation[];
}
