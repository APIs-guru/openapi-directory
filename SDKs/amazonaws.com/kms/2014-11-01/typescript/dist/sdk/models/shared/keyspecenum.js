export var KeySpecEnum;
(function (KeySpecEnum) {
    KeySpecEnum["Rsa2048"] = "RSA_2048";
    KeySpecEnum["Rsa3072"] = "RSA_3072";
    KeySpecEnum["Rsa4096"] = "RSA_4096";
    KeySpecEnum["EccNistP256"] = "ECC_NIST_P256";
    KeySpecEnum["EccNistP384"] = "ECC_NIST_P384";
    KeySpecEnum["EccNistP521"] = "ECC_NIST_P521";
    KeySpecEnum["EccSecgP256K1"] = "ECC_SECG_P256K1";
    KeySpecEnum["SymmetricDefault"] = "SYMMETRIC_DEFAULT";
})(KeySpecEnum || (KeySpecEnum = {}));
