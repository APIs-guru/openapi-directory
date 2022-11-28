import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ErrorModelFaultDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errorcode" })
  errorcode?: string;
}


export class ErrorModelFault extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: ErrorModelFaultDetail;

  @SpeakeasyMetadata({ data: "json, name=faultString" })
  faultString?: string;
}


export class ErrorModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fault" })
  fault?: ErrorModelFault;
}
