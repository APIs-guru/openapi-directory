import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class Listing extends SpeakeasyBase {
    askPrice: number;
    brandName: string;
    color?: string;
    dealerId: number;
    firstSeen: Date;
    interiorColor?: string;
    isNew: boolean;
    lastSeen: Date;
    mileage?: number;
    modelName: string;
    msrp: number;
    vin: string;
    vinDecode?: Map<string, any>;
    year: number;
}
