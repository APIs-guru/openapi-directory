package shared

type V2Key struct {
	Annotations  map[string]string `json:"annotations"`
	CreateTime   *string           `json:"createTime"`
	DeleteTime   *string           `json:"deleteTime"`
	DisplayName  *string           `json:"displayName"`
	Etag         *string           `json:"etag"`
	KeyString    *string           `json:"keyString"`
	Name         *string           `json:"name"`
	Restrictions *V2Restrictions   `json:"restrictions"`
	UID          *string           `json:"uid"`
	UpdateTime   *string           `json:"updateTime"`
}
