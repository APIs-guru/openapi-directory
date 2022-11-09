import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class PredictInput extends SpeakeasyBase {
    mlModelId: string;
    predictEndpoint: string;
    record: Map<string, string>;
}
