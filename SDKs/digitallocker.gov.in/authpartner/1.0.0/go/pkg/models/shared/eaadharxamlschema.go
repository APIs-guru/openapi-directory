package shared

type EaadharXamlSchemaKycResSignatureKeyInfoX509Data struct {
	X509Certificate string
	X509SubjectName string
}

type EaadharXamlSchemaKycResSignatureKeyInfo struct {
	X509Data EaadharXamlSchemaKycResSignatureKeyInfoX509Data
}

type EaadharXamlSchemaKycResSignatureSignedInfoCanonicalizationMethod struct {
	Algorithm string
}

type EaadharXamlSchemaKycResSignatureSignedInfoReferenceDigestMethod struct {
	Algorithm string
}

type EaadharXamlSchemaKycResSignatureSignedInfoReferenceTransformsTransform struct {
	Algorithm string
}

type EaadharXamlSchemaKycResSignatureSignedInfoReferenceTransforms struct {
	Transform EaadharXamlSchemaKycResSignatureSignedInfoReferenceTransformsTransform
}

type EaadharXamlSchemaKycResSignatureSignedInfoReference struct {
	DigestMethod EaadharXamlSchemaKycResSignatureSignedInfoReferenceDigestMethod
	DigestValue  string
	Transforms   EaadharXamlSchemaKycResSignatureSignedInfoReferenceTransforms
	URI          string
}

type EaadharXamlSchemaKycResSignatureSignedInfoSignatureMethod struct {
	Algorithm string
}

type EaadharXamlSchemaKycResSignatureSignedInfo struct {
	CanonicalizationMethod EaadharXamlSchemaKycResSignatureSignedInfoCanonicalizationMethod
	Reference              EaadharXamlSchemaKycResSignatureSignedInfoReference
	SignatureMethod        EaadharXamlSchemaKycResSignatureSignedInfoSignatureMethod
}

type EaadharXamlSchemaKycResSignature struct {
	KeyInfo        EaadharXamlSchemaKycResSignatureKeyInfo
	SignatureValue string
	SignedInfo     EaadharXamlSchemaKycResSignatureSignedInfo
	Xmlns          string
}

type EaadharXamlSchemaKycResUIDDataLData struct {
	Co      string
	Country string
	Dist    string
	Lang    string
	Lm      string
	Loc     string
	Name    string
	Pc      string
	State   string
	Vtc     string
}

type EaadharXamlSchemaKycResUIDDataPoa struct {
	Co      string
	Country string
	Dist    string
	Lm      string
	Loc     string
	Pc      string
	State   string
	Vtc     string
}

type EaadharXamlSchemaKycResUIDDataPoi struct {
	Dob    string
	Gender string
	Name   string
}

type EaadharXamlSchemaKycResUIDDataPrn struct {
	Text string
	Type string
}

type EaadharXamlSchemaKycResUIDData struct {
	LData EaadharXamlSchemaKycResUIDDataLData
	Pht   string
	Poa   EaadharXamlSchemaKycResUIDDataPoa
	Poi   EaadharXamlSchemaKycResUIDDataPoi
	Prn   EaadharXamlSchemaKycResUIDDataPrn
	Tkn   string
	UID   string
}

type EaadharXamlSchemaKycRes struct {
	Rar       string
	Signature EaadharXamlSchemaKycResSignature
	UIDData   EaadharXamlSchemaKycResUIDData
	Code      string
	Ret       string
	Ts        string
	TTL       string
	Txn       string
}

type EaadharXamlSchema struct {
	KycRes EaadharXamlSchemaKycRes
}
