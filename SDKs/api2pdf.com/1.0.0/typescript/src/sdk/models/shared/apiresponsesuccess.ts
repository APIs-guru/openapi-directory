import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ApiResponseSuccess extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cost" })
  cost?: number;

  @SpeakeasyMetadata({ data: "json, name=mbIn" })
  mbIn?: number;

  @SpeakeasyMetadata({ data: "json, name=mbOut" })
  mbOut?: number;

  @SpeakeasyMetadata({ data: "json, name=pdf" })
  pdf?: string;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
