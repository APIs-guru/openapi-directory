import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActionsListOrgSecretsPathParams extends SpeakeasyBase {
    org: string;
}
export declare class ActionsListOrgSecretsQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class ActionsListOrgSecrets200ApplicationJson extends SpeakeasyBase {
    secrets: shared.OrganizationActionsSecret[];
    totalCount: number;
}
export declare class ActionsListOrgSecretsRequest extends SpeakeasyBase {
    pathParams: ActionsListOrgSecretsPathParams;
    queryParams: ActionsListOrgSecretsQueryParams;
}
export declare class ActionsListOrgSecretsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    actionsListOrgSecrets200ApplicationJsonObject?: ActionsListOrgSecrets200ApplicationJson;
}
