import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Asset } from "./asset";



// TestingData
/** 
 * The dataset used for testing. Optionally, if <code>AutoCreate</code> is set, Amazon Rekognition Custom Labels creates a testing dataset using an 80/20 split of the training dataset.
**/
export class TestingData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Assets", elemType: Asset })
  assets?: Asset[];

  @SpeakeasyMetadata({ data: "json, name=AutoCreate" })
  autoCreate?: boolean;
}
