import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DatasetSchema } from "./datasetschema";
import { Tag } from "./tag";



export class CreateDatasetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientToken" })
  clientToken: string;

  @SpeakeasyMetadata({ data: "json, name=DatasetName" })
  datasetName: string;

  @SpeakeasyMetadata({ data: "json, name=DatasetSchema" })
  datasetSchema: DatasetSchema;

  @SpeakeasyMetadata({ data: "json, name=ServerSideKmsKeyId" })
  serverSideKmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
