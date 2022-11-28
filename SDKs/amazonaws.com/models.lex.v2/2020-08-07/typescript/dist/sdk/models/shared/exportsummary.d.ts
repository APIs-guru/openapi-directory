import { SpeakeasyBase } from "../../../internal/utils";
import { ExportStatusEnum } from "./exportstatusenum";
import { ImportExportFileFormatEnum } from "./importexportfileformatenum";
import { ExportResourceSpecification } from "./exportresourcespecification";
/**
 * Provides summary information about an export in an export list.
**/
export declare class ExportSummary extends SpeakeasyBase {
    creationDateTime?: Date;
    exportId?: string;
    exportStatus?: ExportStatusEnum;
    fileFormat?: ImportExportFileFormatEnum;
    lastUpdatedDateTime?: Date;
    resourceSpecification?: ExportResourceSpecification;
}
