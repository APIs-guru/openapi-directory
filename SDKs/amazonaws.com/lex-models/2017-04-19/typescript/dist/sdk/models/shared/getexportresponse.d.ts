import { SpeakeasyBase } from "../../../internal/utils";
import { ExportStatusEnum } from "./exportstatusenum";
import { ExportTypeEnum } from "./exporttypeenum";
import { ResourceTypeEnum } from "./resourcetypeenum";
export declare class GetExportResponse extends SpeakeasyBase {
    exportStatus?: ExportStatusEnum;
    exportType?: ExportTypeEnum;
    failureReason?: string;
    name?: string;
    resourceType?: ResourceTypeEnum;
    url?: string;
    version?: string;
}
