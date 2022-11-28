import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class PortfolioMemberships {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getPortfolioMembership - Get a portfolio membership
     *
     * Returns the complete portfolio record for a single portfolio membership.
    **/
    getPortfolioMembership(req: operations.GetPortfolioMembershipRequest, config?: AxiosRequestConfig): Promise<operations.GetPortfolioMembershipResponse>;
    /**
     * getPortfolioMemberships - Get multiple portfolio memberships
     *
     * Returns a list of portfolio memberships in compact representation. You must specify `portfolio`, `portfolio` and `user`, or `workspace` and `user`.
    **/
    getPortfolioMemberships(req: operations.GetPortfolioMembershipsRequest, config?: AxiosRequestConfig): Promise<operations.GetPortfolioMembershipsResponse>;
    /**
     * getPortfolioMembershipsForPortfolio - Get memberships from a portfolio
     *
     * Returns the compact portfolio membership records for the portfolio.
    **/
    getPortfolioMembershipsForPortfolio(req: operations.GetPortfolioMembershipsForPortfolioRequest, config?: AxiosRequestConfig): Promise<operations.GetPortfolioMembershipsForPortfolioResponse>;
}
