import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class VatTypeDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=isNotApplicable" })
  isNotApplicable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isOnlyZero" })
  isOnlyZero?: boolean;
}
