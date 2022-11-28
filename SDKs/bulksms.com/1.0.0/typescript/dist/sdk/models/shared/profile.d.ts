import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProfileCommerceAddress extends SpeakeasyBase {
    city?: string;
    country?: string;
    postalCode?: string;
    region?: string;
    street?: string[];
}
export declare class ProfileCommerce extends SpeakeasyBase {
    address?: ProfileCommerceAddress;
    bankPaymentReference?: string;
}
export declare class ProfileCompany extends SpeakeasyBase {
    name?: string;
    taxReference?: string;
}
export declare class ProfileCredits extends SpeakeasyBase {
    balance?: number;
    isTransferAllowed?: boolean;
    limit?: number;
}
export declare class ProfileOriginAddresses extends SpeakeasyBase {
    allowed?: string[];
    isFullControlAllowed?: boolean;
}
export declare class ProfileQuota extends SpeakeasyBase {
    remaining: number;
    size: number;
}
export declare class Profile extends SpeakeasyBase {
    commerce?: ProfileCommerce;
    company?: ProfileCompany;
    created: Date;
    credits: ProfileCredits;
    id: string;
    originAddresses?: ProfileOriginAddresses;
    quota: ProfileQuota;
    username: string;
}
