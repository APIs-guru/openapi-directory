import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FeatureValue } from "./featurevalue";


export class GetRecordResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Record", elemType: shared.FeatureValue })
  record?: FeatureValue[];
}
