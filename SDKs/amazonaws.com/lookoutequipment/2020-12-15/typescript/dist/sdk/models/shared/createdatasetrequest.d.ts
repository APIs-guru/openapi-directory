import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DatasetSchema } from "./datasetschema";
import { Tag } from "./tag";
export declare class CreateDatasetRequest extends SpeakeasyBase {
    clientToken: string;
    datasetName: string;
    datasetSchema: DatasetSchema;
    serverSideKmsKeyId?: string;
    tags?: Tag[];
}
