from dataclasses import dataclass, field



@dataclass
class EaadharXamlSchemaKycResSignatureKeyInfoX509Data:
    x509_certificate: str = field()
    x509_subject_name: str = field()
    

@dataclass
class EaadharXamlSchemaKycResSignatureKeyInfo:
    x509_data: EaadharXamlSchemaKycResSignatureKeyInfoX509Data = field()
    

@dataclass
class EaadharXamlSchemaKycResSignatureSignedInfoCanonicalizationMethod:
    algorithm: str = field()
    

@dataclass
class EaadharXamlSchemaKycResSignatureSignedInfoReferenceDigestMethod:
    algorithm: str = field()
    

@dataclass
class EaadharXamlSchemaKycResSignatureSignedInfoReferenceTransformsTransform:
    algorithm: str = field()
    

@dataclass
class EaadharXamlSchemaKycResSignatureSignedInfoReferenceTransforms:
    transform: EaadharXamlSchemaKycResSignatureSignedInfoReferenceTransformsTransform = field()
    

@dataclass
class EaadharXamlSchemaKycResSignatureSignedInfoReference:
    digest_method: EaadharXamlSchemaKycResSignatureSignedInfoReferenceDigestMethod = field()
    digest_value: str = field()
    transforms: EaadharXamlSchemaKycResSignatureSignedInfoReferenceTransforms = field()
    uri: str = field()
    

@dataclass
class EaadharXamlSchemaKycResSignatureSignedInfoSignatureMethod:
    algorithm: str = field()
    

@dataclass
class EaadharXamlSchemaKycResSignatureSignedInfo:
    canonicalization_method: EaadharXamlSchemaKycResSignatureSignedInfoCanonicalizationMethod = field()
    reference: EaadharXamlSchemaKycResSignatureSignedInfoReference = field()
    signature_method: EaadharXamlSchemaKycResSignatureSignedInfoSignatureMethod = field()
    

@dataclass
class EaadharXamlSchemaKycResSignature:
    key_info: EaadharXamlSchemaKycResSignatureKeyInfo = field()
    signature_value: str = field()
    signed_info: EaadharXamlSchemaKycResSignatureSignedInfo = field()
    xmlns: str = field()
    

@dataclass
class EaadharXamlSchemaKycResUIDDataLData:
    co: str = field()
    country: str = field()
    dist: str = field()
    lang: str = field()
    lm: str = field()
    loc: str = field()
    name: str = field()
    pc: str = field()
    state: str = field()
    vtc: str = field()
    

@dataclass
class EaadharXamlSchemaKycResUIDDataPoa:
    co: str = field()
    country: str = field()
    dist: str = field()
    lm: str = field()
    loc: str = field()
    pc: str = field()
    state: str = field()
    vtc: str = field()
    

@dataclass
class EaadharXamlSchemaKycResUIDDataPoi:
    dob: str = field()
    gender: str = field()
    name: str = field()
    

@dataclass
class EaadharXamlSchemaKycResUIDDataPrn:
    text: str = field()
    type: str = field()
    

@dataclass
class EaadharXamlSchemaKycResUIDData:
    l_data: EaadharXamlSchemaKycResUIDDataLData = field()
    pht: str = field()
    poa: EaadharXamlSchemaKycResUIDDataPoa = field()
    poi: EaadharXamlSchemaKycResUIDDataPoi = field()
    prn: EaadharXamlSchemaKycResUIDDataPrn = field()
    tkn: str = field()
    uid: str = field()
    

@dataclass
class EaadharXamlSchemaKycRes:
    rar: str = field()
    signature: EaadharXamlSchemaKycResSignature = field()
    uid_data: EaadharXamlSchemaKycResUIDData = field()
    code: str = field()
    ret: str = field()
    ts: str = field()
    ttl: str = field()
    txn: str = field()
    

@dataclass
class EaadharXamlSchema:
    kyc_res: EaadharXamlSchemaKycRes = field()
    
