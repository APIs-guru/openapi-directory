import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EaadharXamlSchemaKycResSignatureKeyInfoX509Data extends SpeakeasyBase {
  @SpeakeasyMetadata()
  x509Certificate: string;

  @SpeakeasyMetadata()
  x509SubjectName: string;
}


export class EaadharXamlSchemaKycResSignatureKeyInfo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  x509Data: EaadharXamlSchemaKycResSignatureKeyInfoX509Data;
}


export class EaadharXamlSchemaKycResSignatureSignedInfoCanonicalizationMethod extends SpeakeasyBase {
  @SpeakeasyMetadata()
  algorithm: string;
}


export class EaadharXamlSchemaKycResSignatureSignedInfoReferenceDigestMethod extends SpeakeasyBase {
  @SpeakeasyMetadata()
  algorithm: string;
}


export class EaadharXamlSchemaKycResSignatureSignedInfoReferenceTransformsTransform extends SpeakeasyBase {
  @SpeakeasyMetadata()
  algorithm: string;
}


export class EaadharXamlSchemaKycResSignatureSignedInfoReferenceTransforms extends SpeakeasyBase {
  @SpeakeasyMetadata()
  transform: EaadharXamlSchemaKycResSignatureSignedInfoReferenceTransformsTransform;
}


export class EaadharXamlSchemaKycResSignatureSignedInfoReference extends SpeakeasyBase {
  @SpeakeasyMetadata()
  digestMethod: EaadharXamlSchemaKycResSignatureSignedInfoReferenceDigestMethod;

  @SpeakeasyMetadata()
  digestValue: string;

  @SpeakeasyMetadata()
  transforms: EaadharXamlSchemaKycResSignatureSignedInfoReferenceTransforms;

  @SpeakeasyMetadata()
  uri: string;
}


export class EaadharXamlSchemaKycResSignatureSignedInfoSignatureMethod extends SpeakeasyBase {
  @SpeakeasyMetadata()
  algorithm: string;
}


export class EaadharXamlSchemaKycResSignatureSignedInfo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  canonicalizationMethod: EaadharXamlSchemaKycResSignatureSignedInfoCanonicalizationMethod;

  @SpeakeasyMetadata()
  reference: EaadharXamlSchemaKycResSignatureSignedInfoReference;

  @SpeakeasyMetadata()
  signatureMethod: EaadharXamlSchemaKycResSignatureSignedInfoSignatureMethod;
}


export class EaadharXamlSchemaKycResSignature extends SpeakeasyBase {
  @SpeakeasyMetadata()
  keyInfo: EaadharXamlSchemaKycResSignatureKeyInfo;

  @SpeakeasyMetadata()
  signatureValue: string;

  @SpeakeasyMetadata()
  signedInfo: EaadharXamlSchemaKycResSignatureSignedInfo;

  @SpeakeasyMetadata()
  xmlns: string;
}


export class EaadharXamlSchemaKycResUidDataLData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  co: string;

  @SpeakeasyMetadata()
  country: string;

  @SpeakeasyMetadata()
  dist: string;

  @SpeakeasyMetadata()
  lang: string;

  @SpeakeasyMetadata()
  lm: string;

  @SpeakeasyMetadata()
  loc: string;

  @SpeakeasyMetadata()
  name: string;

  @SpeakeasyMetadata()
  pc: string;

  @SpeakeasyMetadata()
  state: string;

  @SpeakeasyMetadata()
  vtc: string;
}


export class EaadharXamlSchemaKycResUidDataPoa extends SpeakeasyBase {
  @SpeakeasyMetadata()
  co: string;

  @SpeakeasyMetadata()
  country: string;

  @SpeakeasyMetadata()
  dist: string;

  @SpeakeasyMetadata()
  lm: string;

  @SpeakeasyMetadata()
  loc: string;

  @SpeakeasyMetadata()
  pc: string;

  @SpeakeasyMetadata()
  state: string;

  @SpeakeasyMetadata()
  vtc: string;
}


export class EaadharXamlSchemaKycResUidDataPoi extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dob: string;

  @SpeakeasyMetadata()
  gender: string;

  @SpeakeasyMetadata()
  name: string;
}


export class EaadharXamlSchemaKycResUidDataPrn extends SpeakeasyBase {
  @SpeakeasyMetadata()
  text: string;

  @SpeakeasyMetadata()
  type: string;
}


export class EaadharXamlSchemaKycResUidData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  lData: EaadharXamlSchemaKycResUidDataLData;

  @SpeakeasyMetadata()
  pht: string;

  @SpeakeasyMetadata()
  poa: EaadharXamlSchemaKycResUidDataPoa;

  @SpeakeasyMetadata()
  poi: EaadharXamlSchemaKycResUidDataPoi;

  @SpeakeasyMetadata()
  prn: EaadharXamlSchemaKycResUidDataPrn;

  @SpeakeasyMetadata()
  tkn: string;

  @SpeakeasyMetadata()
  uid: string;
}


export class EaadharXamlSchemaKycRes extends SpeakeasyBase {
  @SpeakeasyMetadata()
  rar: string;

  @SpeakeasyMetadata()
  signature: EaadharXamlSchemaKycResSignature;

  @SpeakeasyMetadata()
  uidData: EaadharXamlSchemaKycResUidData;

  @SpeakeasyMetadata()
  code: string;

  @SpeakeasyMetadata()
  ret: string;

  @SpeakeasyMetadata()
  ts: string;

  @SpeakeasyMetadata()
  ttl: string;

  @SpeakeasyMetadata()
  txn: string;
}


export class EaadharXamlSchema extends SpeakeasyBase {
  @SpeakeasyMetadata()
  kycRes: EaadharXamlSchemaKycRes;
}
