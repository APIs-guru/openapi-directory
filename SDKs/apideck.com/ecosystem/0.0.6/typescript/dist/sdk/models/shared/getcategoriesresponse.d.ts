import { SpeakeasyBase } from "../../../internal/utils";
import { Category } from "./category";
import { Links } from "./links";
import { Meta } from "./meta";
export declare class GetCategoriesResponse extends SpeakeasyBase {
    data: Category[];
    links?: Links;
    meta?: Meta;
    status: string;
    statusCode: number;
}
