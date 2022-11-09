import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * A key-value pair (the value is optional) that you can define and assign to AWS resources. If you specify a tag that already exists, the tag value is replaced with the value that you specify in the request. Note that the maximum number of application tags includes system tags. The maximum number of user-defined application tags is 50. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-tagging.html">Using Tagging</a>.
**/
export declare class Tag extends SpeakeasyBase {
    key: string;
    value?: string;
}
