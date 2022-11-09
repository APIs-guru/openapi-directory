import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ErrorModelFaultDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=errorcode" })
  errorcode?: string;
}


export class ErrorModelFault extends SpeakeasyBase {
  @Metadata({ data: "json, name=detail" })
  detail?: ErrorModelFaultDetail;

  @Metadata({ data: "json, name=faultString" })
  faultString?: string;
}


export class ErrorModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=fault" })
  fault?: ErrorModelFault;
}
