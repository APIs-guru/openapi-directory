import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SearchPropertySalesQueryParams extends SpeakeasyBase {
    changedateFrom?: Date;
    changedateTo?: Date;
    createdateFrom?: Date;
    createdateTo?: Date;
    description?: string;
    filesuffix?: string;
    fromdate?: Date;
    group?: string;
    max?: number;
    maxlatitude?: number;
    maxlongitude?: number;
    minlatitude?: number;
    minlongitude?: number;
    name?: string;
    searchDbPropertySalesBuildingDescription?: string;
    searchDbPropertySalesBuildingDesign?: string;
    searchDbPropertySalesBuyer?: string;
    searchDbPropertySalesCity?: string;
    searchDbPropertySalesLocation?: string;
    searchDbPropertySalesPropertyAddress?: string;
    searchDbPropertySalesSaleDate?: string;
    searchDbPropertySalesSalePrice?: number;
    searchDbPropertySalesSeller?: string;
    searchDbPropertySalesSubdivision?: string;
    searchDbPropertySalesType?: string;
    searchDbPropertySalesZipcode?: string;
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchPropertySalesRequest extends SpeakeasyBase {
    queryParams: SearchPropertySalesQueryParams;
}
export declare class SearchPropertySalesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
