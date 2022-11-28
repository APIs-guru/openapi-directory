import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class XmlFormatSchemaSignatureKeyInfo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  x509Data?: any;
}


export class XmlFormatSchemaSignature extends SpeakeasyBase {
  @SpeakeasyMetadata()
  keyInfo: XmlFormatSchemaSignatureKeyInfo;

  @SpeakeasyMetadata()
  signatureValue?: any;

  @SpeakeasyMetadata()
  signedInfo?: any;
}


export class XmlFormatSchema extends SpeakeasyBase {
  @SpeakeasyMetadata()
  certificateData: any[];

  @SpeakeasyMetadata()
  signature: XmlFormatSchemaSignature;
}
