import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * A reference to a shared dataset. It is an existing BigQuery dataset with a collection of objects such as tables and views that you want to share with subscribers. When subscriber's subscribe to a listing, Analytics Hub creates a linked dataset in the subscriber's project. A Linked dataset is an opaque, read-only BigQuery dataset that serves as a _symbolic link_ to a shared dataset.
**/
export declare class BigQueryDatasetSource extends SpeakeasyBase {
    dataset?: string;
}
