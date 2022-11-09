import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ExportStatusEnum } from "./exportstatusenum";
import { ImportExportFileFormatEnum } from "./importexportfileformatenum";
import { ExportResourceSpecification } from "./exportresourcespecification";


export class UpdateExportResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=creationDateTime" })
  creationDateTime?: Date;

  @Metadata({ data: "json, name=exportId" })
  exportId?: string;

  @Metadata({ data: "json, name=exportStatus" })
  exportStatus?: ExportStatusEnum;

  @Metadata({ data: "json, name=fileFormat" })
  fileFormat?: ImportExportFileFormatEnum;

  @Metadata({ data: "json, name=lastUpdatedDateTime" })
  lastUpdatedDateTime?: Date;

  @Metadata({ data: "json, name=resourceSpecification" })
  resourceSpecification?: ExportResourceSpecification;
}
