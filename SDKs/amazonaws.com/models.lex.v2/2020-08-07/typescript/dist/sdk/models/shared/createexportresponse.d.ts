import { SpeakeasyBase } from "../../../internal/utils";
import { ExportStatusEnum } from "./exportstatusenum";
import { ImportExportFileFormatEnum } from "./importexportfileformatenum";
import { ExportResourceSpecification } from "./exportresourcespecification";
export declare class CreateExportResponse extends SpeakeasyBase {
    creationDateTime?: Date;
    exportId?: string;
    exportStatus?: ExportStatusEnum;
    fileFormat?: ImportExportFileFormatEnum;
    resourceSpecification?: ExportResourceSpecification;
}
