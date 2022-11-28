import { SpeakeasyBase } from "../../../internal/utils";
import { WorldExportJobErrorCodeEnum } from "./worldexportjoberrorcodeenum";
import { OutputLocation } from "./outputlocation";
import { WorldExportJobStatusEnum } from "./worldexportjobstatusenum";
export declare class CreateWorldExportJobResponse extends SpeakeasyBase {
    arn?: string;
    clientRequestToken?: string;
    createdAt?: Date;
    failureCode?: WorldExportJobErrorCodeEnum;
    iamRole?: string;
    outputLocation?: OutputLocation;
    status?: WorldExportJobStatusEnum;
    tags?: Map<string, string>;
}
