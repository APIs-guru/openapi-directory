import { SpeakeasyBase } from "../../../internal/utils";
import { Asset } from "./asset";
/**
 * The dataset used for testing. Optionally, if <code>AutoCreate</code> is set, Amazon Rekognition Custom Labels creates a testing dataset using an 80/20 split of the training dataset.
**/
export declare class TestingData extends SpeakeasyBase {
    assets?: Asset[];
    autoCreate?: boolean;
}
