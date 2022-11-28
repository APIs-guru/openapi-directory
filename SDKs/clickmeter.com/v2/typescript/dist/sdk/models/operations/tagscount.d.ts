import { SpeakeasyBase } from "../../../internal/utils";
export declare enum TagsCountTypeEnum {
    Tp = "tp",
    Tl = "tl",
    Dp = "dp",
    Gr = "gr"
}
export declare class TagsCountQueryParams extends SpeakeasyBase {
    datapoints?: string;
    groups?: string;
    name?: string;
    type?: TagsCountTypeEnum;
}
export declare class TagsCountRequest extends SpeakeasyBase {
    queryParams: TagsCountQueryParams;
}
export declare class TagsCountResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    systemObject?: Map<string, any>;
}
