import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExportStatusEnum } from "./exportstatusenum";
import { ImportExportFileFormatEnum } from "./importexportfileformatenum";
import { ExportResourceSpecification } from "./exportresourcespecification";



export class CreateExportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationDateTime" })
  creationDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=exportId" })
  exportId?: string;

  @SpeakeasyMetadata({ data: "json, name=exportStatus" })
  exportStatus?: ExportStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=fileFormat" })
  fileFormat?: ImportExportFileFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=resourceSpecification" })
  resourceSpecification?: ExportResourceSpecification;
}
