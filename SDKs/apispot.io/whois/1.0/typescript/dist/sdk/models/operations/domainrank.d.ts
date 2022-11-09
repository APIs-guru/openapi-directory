import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DomainRankPathParams extends SpeakeasyBase {
    domain: string;
}
export declare class DomainRankRequest extends SpeakeasyBase {
    pathParams: DomainRankPathParams;
}
export declare class DomainRank200ApplicationJson extends SpeakeasyBase {
    rank?: number;
}
export declare class DomainRankResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    domainRank200ApplicationJsonObject?: DomainRank200ApplicationJson;
}
