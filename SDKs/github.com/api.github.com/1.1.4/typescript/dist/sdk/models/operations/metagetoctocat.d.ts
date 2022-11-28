import { SpeakeasyBase } from "../../../internal/utils";
export declare class MetaGetOctocatQueryParams extends SpeakeasyBase {
    s?: string;
}
export declare class MetaGetOctocatRequest extends SpeakeasyBase {
    queryParams: MetaGetOctocatQueryParams;
}
export declare class MetaGetOctocatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    metaGetOctocat200ApplicationOctocatStreamString?: string;
}
