export var PredicateTypeEnum;
(function (PredicateTypeEnum) {
    PredicateTypeEnum["IpMatch"] = "IPMatch";
    PredicateTypeEnum["ByteMatch"] = "ByteMatch";
    PredicateTypeEnum["SqlInjectionMatch"] = "SqlInjectionMatch";
    PredicateTypeEnum["GeoMatch"] = "GeoMatch";
    PredicateTypeEnum["SizeConstraint"] = "SizeConstraint";
    PredicateTypeEnum["XssMatch"] = "XssMatch";
    PredicateTypeEnum["RegexMatch"] = "RegexMatch";
})(PredicateTypeEnum || (PredicateTypeEnum = {}));
