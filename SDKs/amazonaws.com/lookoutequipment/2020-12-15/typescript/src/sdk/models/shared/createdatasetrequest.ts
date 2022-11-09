import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DatasetSchema } from "./datasetschema";
import { Tag } from "./tag";


export class CreateDatasetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientToken" })
  clientToken: string;

  @Metadata({ data: "json, name=DatasetName" })
  datasetName: string;

  @Metadata({ data: "json, name=DatasetSchema" })
  datasetSchema: DatasetSchema;

  @Metadata({ data: "json, name=ServerSideKmsKeyId" })
  serverSideKmsKeyId?: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
