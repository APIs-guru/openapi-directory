import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OrderTypeInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=default" })
  default?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class OrderType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=default" })
  default?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=updated_by" })
  updatedBy?: string;
}
