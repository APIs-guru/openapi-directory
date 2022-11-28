import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteResourceShareResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @SpeakeasyMetadata({ data: "json, name=returnValue" })
  returnValue?: boolean;
}
