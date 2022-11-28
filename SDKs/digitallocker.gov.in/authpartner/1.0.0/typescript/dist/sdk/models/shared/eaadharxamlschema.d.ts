import { SpeakeasyBase } from "../../../internal/utils";
export declare class EaadharXamlSchemaKycResSignatureKeyInfoX509Data extends SpeakeasyBase {
    x509Certificate: string;
    x509SubjectName: string;
}
export declare class EaadharXamlSchemaKycResSignatureKeyInfo extends SpeakeasyBase {
    x509Data: EaadharXamlSchemaKycResSignatureKeyInfoX509Data;
}
export declare class EaadharXamlSchemaKycResSignatureSignedInfoCanonicalizationMethod extends SpeakeasyBase {
    algorithm: string;
}
export declare class EaadharXamlSchemaKycResSignatureSignedInfoReferenceDigestMethod extends SpeakeasyBase {
    algorithm: string;
}
export declare class EaadharXamlSchemaKycResSignatureSignedInfoReferenceTransformsTransform extends SpeakeasyBase {
    algorithm: string;
}
export declare class EaadharXamlSchemaKycResSignatureSignedInfoReferenceTransforms extends SpeakeasyBase {
    transform: EaadharXamlSchemaKycResSignatureSignedInfoReferenceTransformsTransform;
}
export declare class EaadharXamlSchemaKycResSignatureSignedInfoReference extends SpeakeasyBase {
    digestMethod: EaadharXamlSchemaKycResSignatureSignedInfoReferenceDigestMethod;
    digestValue: string;
    transforms: EaadharXamlSchemaKycResSignatureSignedInfoReferenceTransforms;
    uri: string;
}
export declare class EaadharXamlSchemaKycResSignatureSignedInfoSignatureMethod extends SpeakeasyBase {
    algorithm: string;
}
export declare class EaadharXamlSchemaKycResSignatureSignedInfo extends SpeakeasyBase {
    canonicalizationMethod: EaadharXamlSchemaKycResSignatureSignedInfoCanonicalizationMethod;
    reference: EaadharXamlSchemaKycResSignatureSignedInfoReference;
    signatureMethod: EaadharXamlSchemaKycResSignatureSignedInfoSignatureMethod;
}
export declare class EaadharXamlSchemaKycResSignature extends SpeakeasyBase {
    keyInfo: EaadharXamlSchemaKycResSignatureKeyInfo;
    signatureValue: string;
    signedInfo: EaadharXamlSchemaKycResSignatureSignedInfo;
    xmlns: string;
}
export declare class EaadharXamlSchemaKycResUidDataLData extends SpeakeasyBase {
    co: string;
    country: string;
    dist: string;
    lang: string;
    lm: string;
    loc: string;
    name: string;
    pc: string;
    state: string;
    vtc: string;
}
export declare class EaadharXamlSchemaKycResUidDataPoa extends SpeakeasyBase {
    co: string;
    country: string;
    dist: string;
    lm: string;
    loc: string;
    pc: string;
    state: string;
    vtc: string;
}
export declare class EaadharXamlSchemaKycResUidDataPoi extends SpeakeasyBase {
    dob: string;
    gender: string;
    name: string;
}
export declare class EaadharXamlSchemaKycResUidDataPrn extends SpeakeasyBase {
    text: string;
    type: string;
}
export declare class EaadharXamlSchemaKycResUidData extends SpeakeasyBase {
    lData: EaadharXamlSchemaKycResUidDataLData;
    pht: string;
    poa: EaadharXamlSchemaKycResUidDataPoa;
    poi: EaadharXamlSchemaKycResUidDataPoi;
    prn: EaadharXamlSchemaKycResUidDataPrn;
    tkn: string;
    uid: string;
}
export declare class EaadharXamlSchemaKycRes extends SpeakeasyBase {
    rar: string;
    signature: EaadharXamlSchemaKycResSignature;
    uidData: EaadharXamlSchemaKycResUidData;
    code: string;
    ret: string;
    ts: string;
    ttl: string;
    txn: string;
}
export declare class EaadharXamlSchema extends SpeakeasyBase {
    kycRes: EaadharXamlSchemaKycRes;
}
