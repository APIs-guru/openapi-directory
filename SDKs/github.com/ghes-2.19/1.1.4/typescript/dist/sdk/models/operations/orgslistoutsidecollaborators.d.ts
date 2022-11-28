import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OrgsListOutsideCollaboratorsPathParams extends SpeakeasyBase {
    org: string;
}
export declare enum OrgsListOutsideCollaboratorsFilterEnum {
    TwofaDisabled = "2fa_disabled",
    All = "all"
}
export declare class OrgsListOutsideCollaboratorsQueryParams extends SpeakeasyBase {
    filter?: OrgsListOutsideCollaboratorsFilterEnum;
    page?: number;
    perPage?: number;
}
export declare class OrgsListOutsideCollaboratorsRequest extends SpeakeasyBase {
    pathParams: OrgsListOutsideCollaboratorsPathParams;
    queryParams: OrgsListOutsideCollaboratorsQueryParams;
}
export declare class OrgsListOutsideCollaboratorsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    simpleUsers?: shared.SimpleUser[];
}
