import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateConstraintInput extends SpeakeasyBase {
    acceptLanguage?: string;
    description?: string;
    idempotencyToken: string;
    parameters: string;
    portfolioId: string;
    productId: string;
    type: string;
}
