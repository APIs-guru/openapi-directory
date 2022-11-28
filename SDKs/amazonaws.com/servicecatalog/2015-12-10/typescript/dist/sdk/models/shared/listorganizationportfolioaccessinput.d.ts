import { SpeakeasyBase } from "../../../internal/utils";
import { OrganizationNodeTypeEnum } from "./organizationnodetypeenum";
export declare class ListOrganizationPortfolioAccessInput extends SpeakeasyBase {
    acceptLanguage?: string;
    organizationNodeType: OrganizationNodeTypeEnum;
    pageSize?: number;
    pageToken?: string;
    portfolioId: string;
}
