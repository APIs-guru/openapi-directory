import { SpeakeasyBase } from "../../../internal/utils";
export declare class XmlFormatSchemaSignatureKeyInfo extends SpeakeasyBase {
    x509Data?: any;
}
export declare class XmlFormatSchemaSignature extends SpeakeasyBase {
    keyInfo: XmlFormatSchemaSignatureKeyInfo;
    signatureValue?: any;
    signedInfo?: any;
}
export declare class XmlFormatSchema extends SpeakeasyBase {
    certificateData: any[];
    signature: XmlFormatSchemaSignature;
}
