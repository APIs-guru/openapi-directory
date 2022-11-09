import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Asset } from "./asset";


// TestingData
/** 
 * The dataset used for testing. Optionally, if <code>AutoCreate</code> is set, Amazon Rekognition Custom Labels creates a testing dataset using an 80/20 split of the training dataset.
**/
export class TestingData extends SpeakeasyBase {
  @Metadata({ data: "json, name=Assets", elemType: shared.Asset })
  assets?: Asset[];

  @Metadata({ data: "json, name=AutoCreate" })
  autoCreate?: boolean;
}
