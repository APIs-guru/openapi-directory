import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CloudWatchLoggingOption } from "./cloudwatchloggingoption";
import { Input } from "./input";
import { Output } from "./output";
import { Tag } from "./tag";
/**
 * TBD
**/
export declare class CreateApplicationRequest extends SpeakeasyBase {
    applicationCode?: string;
    applicationDescription?: string;
    applicationName: string;
    cloudWatchLoggingOptions?: CloudWatchLoggingOption[];
    inputs?: Input[];
    outputs?: Output[];
    tags?: Tag[];
}
