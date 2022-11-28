import { SpeakeasyBase } from "../../../internal/utils";
export declare class TeamsDeleteInOrgPathParams extends SpeakeasyBase {
    org: string;
    teamSlug: string;
}
export declare class TeamsDeleteInOrgRequest extends SpeakeasyBase {
    pathParams: TeamsDeleteInOrgPathParams;
}
export declare class TeamsDeleteInOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
