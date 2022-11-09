import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * See the [errors page](errors/) for more detail on what kind of errors you can get.
**/
export declare class Error extends SpeakeasyBase {
    detail?: string;
    status: number;
    title: string;
    type: string;
}
