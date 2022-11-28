import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FeatureValue } from "./featurevalue";



export class GetRecordResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Record", elemType: FeatureValue })
  record?: FeatureValue[];
}
